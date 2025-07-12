import { NextResponse } from 'next/server';

type RepoNode = {
  id: string;
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  primaryLanguage?: { name: string };
  repositoryTopics?: { nodes: { topic: { name: string } }[] };
};

export async function GET() {
  const query = `
    query {
      user(login: "faroukalsajee") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              primaryLanguage {
                name
              }
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      console.error('GitHub API error:', res.status, res.statusText);
      return NextResponse.json([], { status: 500 });
    }

    const data = await res.json();
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return NextResponse.json([], { status: 500 });
    }

    const repos = data.data?.user?.pinnedItems?.nodes || [];
    const transformedRepos = repos.map((repo: RepoNode) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.url,
      stargazers_count: repo.stargazerCount,
      language: repo.primaryLanguage?.name || null,
      topics: repo.repositoryTopics?.nodes?.map((node) => node.topic.name) || []
    }));

    return NextResponse.json(transformedRepos);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json([], { status: 500 });
  }
} 