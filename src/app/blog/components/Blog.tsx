"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/utils/createPageUrl';
import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, ExternalLink, Tag } from 'lucide-react';
import { motion } from "framer-motion"
type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  publish_date: string;
  category: string;
  featured_image: string;
};

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            // Mock blog posts data
            const mockPosts = [
              
                {
                    id: 1,
                    title: "Essential Car Maintenance Tips for Long Island Drivers",
                    slug: "essential-car-maintenance-tips",
                    excerpt: "Learn the essential maintenance tips to keep your vehicle running smoothly in Long Island's unique driving conditions.",
                    publish_date: "2024-01-15",
                    category: "maintenance-tips",
                    featured_image: "/Blog.jpg"
                },
                {
                    id: 2,
                    title: "How to Choose the Right Oil for Your Vehicle",
                    slug: "choose-right-oil-vehicle",
                    excerpt: "Understanding the different types of motor oil and how to select the best one for your specific vehicle and driving conditions.",
                    publish_date: "2024-01-10",
                    category: "oil-changes",
                    featured_image: "/Blog.jpg"
                },
                {
                    id: 3,
                    title: "Signs Your Brakes Need Attention",
                    slug: "brake-warning-signs",
                    excerpt: "Recognize the warning signs that indicate your brakes need professional inspection and service.",
                    publish_date: "2024-01-05",
                    category: "brake-service",
                    featured_image: "/Blog.jpg"
                },
                {
                    id: 4,
                    title: "Winter Driving Safety Checklist",
                    slug: "winter-driving-checklist",
                    excerpt: "Prepare your vehicle for Long Island's winter weather with our comprehensive safety checklist.",
                    publish_date: "2024-01-01",
                    category: "seasonal-maintenance",
                    featured_image: "/Blog.jpg"
                },
                {
                    id: 5,
                    title: "Understanding Your Vehicle's Electrical System",
                    slug: "vehicle-electrical-system",
                    excerpt: "A comprehensive guide to your car's electrical components and common issues to watch for.",
                    publish_date: "2023-12-28",
                    category: "electrical-systems",
                    featured_image: "/Blog.jpg"
                },
                {
                    id: 6,
                    title: "The Importance of Regular Tire Maintenance",
                    slug: "tire-maintenance-importance",
                    excerpt: "Why proper tire care is crucial for safety, performance, and fuel efficiency on Long Island roads.",
                    publish_date: "2023-12-25",
                    category: "tire-service",
                    featured_image: "/Blog.jpg"
                }
            ];
            setPosts(mockPosts);
            setIsLoading(false);
        };
        fetchPosts();
    }, []);

 const [postsToShow, setPostsToShow] = useState(5);

    const handleLoadMore = () => {
        setPostsToShow(prevCount => prevCount + 5); // Add 5 more posts
    };

    const hasMorePosts = postsToShow < posts.length;

    return (
        <div>
            <div className="py-24 bg-gray-800 text-white">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-white">Our Auto Care Blog</h1>
{/*                     
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "28rem" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-1 bg-gradient-to-b from-blue-800 to-gray-800 mx-auto mt-2 rounded-full"
                        /> */}
                     <p className="text-xl text-gray-200 max-w-3xl mx-auto mt-4">
                        Expert tips, advice, and news from the technicians at Everything Auto.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-5 gap-3">
                    {isLoading ? (
                        Array.from({ length: 5 }).map((_, index) => (
                            <Card key={index} className="animate-pulse">
                                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                                <CardContent className="p-6 space-y-4">
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                    <div className="h-10 bg-gray-200 rounded w-1/3 mt-4"></div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                         posts.slice(0, postsToShow).map(post => (
<Card
  key={post.id}
  className="overflow-hidden group transition-shadow duration-300 shadow-md hover:shadow-lg flex flex-col bg-white"
>
  <Link href={createPageUrl(`BlogPost?slug=${post.slug}`)} className="block overflow-hidden">
   <Image
  src={post.featured_image}
  alt={post.title}
  width={800} // apne hisaab se set karo
  height={500} // apne hisaab se set karo
  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
/>
  </Link>

  <CardContent className="p-4 flex flex-col flex-grow">
    {/* Date & Category */}
   <div className="flex flex-col gap-1 text-sm text-gray-500 mb-3">
  <div className="flex items-center space-x-1">
    <Calendar className="w-4 h-4" />
    <span>{new Date(post.publish_date).toLocaleDateString()}</span>
  </div>
  <div className="flex items-center space-x-1">
    <Tag className="w-4 h-4" />
    <span className="capitalize">{post.category.replace('-', ' ')}</span>
  </div>
</div>

    {/* Title & Excerpt Container - Added fixed height to ensure alignment */}
    <div className="flex-grow min-h-[120px] mb-2"> {/* Adjust this value as needed */}
      {/* Title */}
      <h3 className="text-xl font-bold text-[var(--dark-blue)] mb-2 line-clamp-2">
        <Link
          href={createPageUrl(`BlogPost?slug=${post.slug}`)}
          className="hover:text-blue-600 transition-colors"
        >
          {post.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 line-clamp-3 flex-grow">
        {post.excerpt}
      </p>
    </div>

    {/* Read More Button Fixed at Bottom */}
    <div className="mt-auto">
      <Link href={createPageUrl(`BlogPost?slug=${post.slug}`)}>
        <Button
         
                      style={{
        boxShadow:
          "inset 0 -2px 5px rgba(138, 193, 252, 0.77), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
      }}
           variant="default" // Changed from "link" to "default"
          className="action-button action-button-book w-full"
        >
           <ExternalLink className="w-4 h-4 mr-1" />Read More
        </Button>
      </Link>
    </div>
  </CardContent>
</Card>

                        ))
                    )}
                </div>
                {hasMorePosts && (
    <div className="flex justify-center mt-8">
        <Button 
         style={{
                        boxShadow:
                          "inset 0 -2px 5px rgba(249, 195, 195, 0.65), inset 0 2px 5px rgba(19, 19, 19, 0.4), 0 2px 5px rgba(0, 0, 0, 0.11)",
                      }}
        onClick={handleLoadMore} className='action-button action-button-call px-6 py-3 text-lg'>
            Load More Posts
        </Button>
    </div>
)}
            </div>
        </div>
    );
}
