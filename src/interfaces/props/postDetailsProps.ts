import { Post } from "../models";

export interface PostDetailsProps {
    post: Post;
    isOpen: boolean;
    onClose: () => void;
};