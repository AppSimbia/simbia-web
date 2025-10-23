import { Post } from "../models";

export interface PostCardProps {
    post: Post;
    onClick?: () => void;
};