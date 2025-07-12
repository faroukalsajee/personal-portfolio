import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Use the public REST API instead of GraphQL
    const res = await fetch('https://api.github.com/users/faroukalsajee/repos?sort=updated&per_page=6', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'personal-portfolio'
      },
    });

    if (!res.ok) {
      console.error('GitHub API error:', res.status, res.statusText);
      return NextResponse.json([], { status: 500 });
    }

    const repos = await res.json();
    
    // Transform the data to match the expected structure
    const transformedRepos = repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics || []
    }));

    return NextResponse.json(transformedRepos);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json([], { status: 500 });
  }
} 