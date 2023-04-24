import { reviews } from "@/data/reviews";
import Review from "./Review";

interface Props {
  currentSlide: number;
}

export default function Reviews({ currentSlide }: Props) {
  return <Review data={reviews[currentSlide]} />;
}
