import { Post } from "../models";

export interface ProductDetailsProps {
    post: Post;
    isOpen: boolean;
    onClose: () => void;
};