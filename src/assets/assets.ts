// Authors
import author_1 from './authors/author_1.jpeg';
import author_2 from './authors/author_2.jpeg';
import author_3 from './authors/author_3.jpeg';
import author_4 from './authors/author_4.jpeg';


// Blog images
import blog_pic_1 from './blog-images/blog_pic_1.jpeg';
import blog_pic_2 from './blog-images/blog_pic_2.jpeg';
import blog_pic_3 from './blog-images/blog_pic_3.jpeg';
import blog_pic_4 from './blog-images/blog_pic_4.jpeg';
import blog_pic_5 from './blog-images/blog_pic_5.jpeg';
import blog_pic_6 from './blog-images/blog_pic_6.jpeg';
import blog_pic_7 from './blog-images/blog_pic_7.jpeg';
import blog_pic_8 from './blog-images/blog_pic_8.jpeg';


type Blog = {
  id: number
  title: string
  description: string
  image?: HTMLImageElement
  date: Date
  category: string
  authorImg?: HTMLImageElement
  name: string 
}

export const blogData = [
  {
    id: 1,
    title: "The Future of AI: Trends and Predictions",
    description: "Explore the latest trends in artificial intelligence and what the future holds for this rapidly evolving technology.",
    image: blog_pic_8,
    date: Date.now(),
    category: "Development",
    authorImg: author_1,
    name: "Andy Brown"
  },
  {
    id: 2,
    title: "10 Healthy Recipes for a Balanced Diet",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lectus in tellus vehicula, nec dapibus diam condimentum. Sed vitae egestas ipsum, vitae fermentum purus. Proin lacinia risus id condimentum volutpat. Ut consequat aliquet mauris nec malesuada. Curabitur vel suscipit velit. Sed tristique gravida mattis. Suspendisse sed maximus nisi. Aenean imperdiet pretium elementum.Curabitur molestie blandit urna a sollicitudin. In mollis lectus mi, viverra congue libero interdum non. Sed interdum egestas felis at viverra. Aliquam mauris orci, imperdiet ac sapien pretium, blandit dignissim est. Phasellus in ante eget felis viverra accumsan. Nulla pellentesque convallis mauris, sit amet viverra nibh laoreet non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed augue sed arcu bibendum suscipit. Vestibulum ut molestie sapien, vitae condimentum erat. Nam a suscipit lectus. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer convallis est vitae ligula efficitur pulvinar. In congue ut tortor sit amet accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget massa varius vestibulum nec non odio.Aliquam vitae enim rhoncus, hendrerit nisi at, vestibulum nisi. Proin rutrum faucibus dapibus. Nunc tempor mollis turpis, eu tristique magna condimentum tempus. Donec quis tellus nec neque laoreet sollicitudin. Sed sagittis hendrerit metus, nec efficitur magna tincidunt ut. Praesent luctus vitae metus in feugiat. Integer pellentesque justo ac ligula dictum, at gravida nisi ultrices. Sed viverra auctor cursus. Aliquam pellentesque egestas arcu nec interdum. ",
    image: blog_pic_2,
    date: Date.now(),
    category: "AI/ML",
    author_image: author_4,
    name: "Andy Brown"
  },
  {
    id: 3,
    title: "The Ultimate Travel Guide to Japan",
    description: "Plan your trip to Japan with this comprehensive travel guide covering top attractions, cuisine, and cultural experiences.",
    image: blog_pic_1,
    date: Date.now(),
    category: "Security",
    author_image: author_3,
    name: "James Silver"
  },

  {
    id: 5,
    title: "Top 10 Coding Bootcamps for Aspiring Developers",
    description: "Find the best coding bootcamps to kickstart your career in software development.",
    image: blog_pic_6,
    date: Date.now(),
    category: "Development",
    author_image: author_2,
    name: "James Silver"
  },
  {
    id: 6,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    description: "Discover practical tips and strategies for living a more sustainable and eco-friendly lifestyle.",
    image: blog_pic_4,
    date: Date.now(),
    category: "AI/ML",
    author_image: author_4,
    name: "James Silver"
  },
  {
    id: 8,
    title: "The Evolution of Music: From Vinyl to Streaming",
    description: "Explore the history of music and how technology has transformed the way we listen to it.",
    image: blog_pic_7,
    date: Date.now(),
    category: "AI/ML",
    author_image: author_3,
    name: "James Silver"
  },
  {
    id: 14,
    title: "Mindfulness and Meditation for Stress Relief",
    description: "Learn about the benefits of mindfulness and meditation practices for reducing stress and improving mental health.",
    image: blog_pic_2,
    date: Date.now(),
    category: "Web 3.0",
    author_image: author_1,
    name: "Andy Brown",
  },
  {
    id: 15,
    title: "Home Office Setup: Creating a Productive Workspace",
    description: "Tips and ideas for setting up a home office that boosts productivity and comfort.",
    image: blog_pic_5,
    date: Date.now(),
    category: "Web 3.0",
    author_image: author_2,
    name: "Andy Brown",
  },

];