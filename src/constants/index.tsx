import { RiSearch2Line, RiSearch2Fill } from "react-icons/ri";
import { BsBell, BsBellFill } from "react-icons/bs";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaRegSquareMinus, FaSquareMinus } from "react-icons/fa6";
import { IoBookmarksOutline, IoBookmarks } from "react-icons/io5";
import { BsPeople, BsFillPeopleFill } from "react-icons/bs";
import { RiUser4Line, RiUser4Fill } from "react-icons/ri";
import {
  HiDotsCircleHorizontal,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";

export const side_links = [
  {
    name: "Explore",
    path: "/explore",
    icon: <RiSearch2Line className="w-6 h-6" />,
    activeIcon: <RiSearch2Fill className="w-6 h-6" />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <BsBell className="w-6 h-6" />,
    activeIcon: <BsBellFill className="w-6 h-6" />,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <MdOutlineEmail className="w-6 h-6" />,
    activeIcon: <MdEmail className="w-6 h-6" />,
  },
  {
    name: "Grok",
    path: "/grok",
    icon: <FaRegSquareMinus className="w-6 h-6" />,
    activeIcon: <FaSquareMinus className="w-6 h-6" />,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: <IoBookmarksOutline className="w-6 h-6" />,
    activeIcon: <IoBookmarks className="w-6 h-6" />,
  },
  {
    name: "Communities",
    path: "/communities",
    icon: <BsPeople className="w-6 h-6" />,
    activeIcon: <BsFillPeopleFill className="w-6 h-6" />,
  },
  {
    name: "Premium",
    path: "/premium",
    icon: <RiTwitterXLine className="w-6 h-6" />,
    activeIcon: <RiTwitterXLine className="w-6 h-6" />,
  },
  {
    name: "My Profile",
    path: "/profile",
    icon: <RiUser4Line className="w-6 h-6" />,
    activeIcon: <RiUser4Fill className="w-6 h-6" />,
  },
  {
    name: "More",
    path: "/more",
    icon: <HiOutlineDotsCircleHorizontal className="w-6 h-6" />,
    activeIcon: <HiDotsCircleHorizontal className="w-6 h-6" />,
  },
];

export const dummy_tweets = [
  {
    name: "Abdullahi Salihu",
    address: "0xB6B0746f8137Db1E788597CFcD818e2B3bfF6324",
    avatar:
      "https://pbs.twimg.com/profile_images/1770400128437772288/xHvRrUHJ_400x400.jpg",
    caption: "Can a non coder man accept a coder women as his wife?",
    comments: 0,
    likes: 0,
    retweets: 0,
  },
  {
    name: "Janka Antalova",
    address: "0xB6B0746f8137Db1E788597CFcD818e2B3bfF6324",
    avatar:
      "https://pbs.twimg.com/profile_images/1651597683579076609/NljbXsHj_400x400.jpg",
    caption:
      "I don't know what to code. I'm feeling very uninspired. U guys have any tips?",
    comments: 0,
    likes: 0,
    retweets: 0,
  },
  {
    name: "devZizi",
    address: "0x000000000000000000000000000000000000",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Caption this",
    uploadedImg:
      "https://plus.unsplash.com/premium_photo-1709901916808-19de9683437e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    comments: 0,
    likes: 0,
    retweets: 0,
  },
  {
    name: "John Doe",
    address: "0x000000000000000000000000000000000000",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Imagine the look of a subway at night :)",
    uploadedImg:
      "https://images.unsplash.com/photo-1710781404053-dc7ffa39c996?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    comments: 0,
    likes: 0,
    retweets: 0,
  },
  {
    name: "Jane Doe",
    address: "0x000000000000000000000000000000000000",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption:
      "Female Developers!! This opportunity is about to close so hurry!!!! Become a tech pro by joining the Titan Fellowship - an exquisite and competitive program designed exclusively for female developers in the early stages of their career, with at least 1 year of industry experience or proof of beginners level knowledge who wants to further and excel in:",
    comments: 0,
    likes: 0,
    retweets: 0,
  },
];

export const site_config = {
  name: "XdApp",
  desc: "XdApp is a free social networking service identical to Twitter, but decentralized, where users broadcast brief updates.",
};
