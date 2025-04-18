import React, { useState } from 'react';
export default function Blog() {
  type BlogPost = {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
  };
  const initialPosts:BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Electric Cars in 2025',
      date: 'April 12, 2025',
      description: 'Explore the most popular electric cars coming out this year, their features, and why they matter.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 2,
      title: 'Tips for First-Time Car Buyers',
      date: 'March 30, 2025',
      description: 'A helpful guide to buying your first car—what to look for, what to avoid, and how to budget.',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 3,
      title: 'Why SUVs are Dominating the Market',
      date: 'March 15, 2025',
      description: 'Learn about the rise of SUVs and why more people are choosing them for their everyday drives.',
      image: 'https://via.placeholder.com/400x250',
    },
  ];
  const [posts] = useState(initialPosts);

  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="bg-blue-900 text-white px-4 py-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl">
          <p className="text-lg mb-2">Welcome to AutoDrive Blog</p>
          <p className="text-xl lg:text-2xl font-semibold leading-snug">
            Insights, tips, and stories for car enthusiasts and everyday drivers.
          </p>
        </div>
        <div className="relative mt-6 lg:mt-0">
          <img src="https://via.placeholder.com/200" alt="author" className="rounded-full w-40 h-40 object-cover border-4 border-white" />
          <div className="absolute top-0 left-0 bg-orange-500 text-white font-bold px-4 py-1 rounded-full -translate-x-1/2 -translate-y-1/2">
            Hi!
          </div>
        </div>
      </header>

      <main className="px-4 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10 relative">
          <span className="inline-block border-b-4 border-blue-600 pb-1">Recent Posts</span>
        </h2>

        <div className="grid gap-10">
          {posts.map((post) => {
            return (
              <div key={post.id} className="grid md:grid-cols-2 gap-6 items-start">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-lg w-full h-64 object-cover" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-3">{post.description}</p>
                  <a href="#" className="text-blue-600 hover:underline font-medium">Read More</a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-900 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
            All Posts
          </button>
        </div>
      </main>

      
    </div>
  )
}
