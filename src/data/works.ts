import d1 from "@/assets/design-1.jpg";
import d2 from "@/assets/design-2.jpg";
import d3 from "@/assets/design-3.jpg";
import d4 from "@/assets/design-4.jpg";
import handloom from "@/assets/handloom.jpg";
import rampwalk from "@/assets/rampwalk.jpg";

export type Work = {
  slug: string;
  title: string;
  year: string;
  category: string;
  concept: string;
  description: string;
  image: string;
};

export const works: Work[] = [
  { slug: "design-1", title: "Design 1", year: "2024", category: "Illustration",
    concept: "Geometric Blue Illusion",
    description: "An intricate design featuring sharp blue geometric patterns with cascading vertical elements, topped with a striking flat-brimmed hat structure.",
    image: d1 },
  { slug: "design-2", title: "Design 2", year: "2024", category: "Illustration",
    concept: "Earthy Embellishments",
    description: "A two-piece ensemble featuring an earth-toned palette with heavy pearl-like embellishments across the bodice and a draped skirt with a high slit.",
    image: d2 },
  { slug: "design-3", title: "Design 3", year: "2024", category: "Illustration",
    concept: "Textured Menswear",
    description: "A bold menswear look featuring a textured green draped top, wide layered brown trousers, and a classic black cap.",
    image: d3 },
  { slug: "handloom-project", title: "Handloom Project", year: "2024", category: "Craft & Textile",
    concept: "Traditional Weaving Techniques",
    description: "A collaborative project exploring traditional handloom weaving techniques, emphasizing sustainable practices and authentic Indian craftsmanship.",
    image: handloom },
  { slug: "rampwalk", title: "Rampwalk", year: "2024", category: "Fashion Show",
    concept: "Runway Showcase",
    description: "A striking runway look featuring a structured black bodice paired with a voluminous gathered white skirt, blending avant-garde forms with wearable art.",
    image: rampwalk },
  { slug: "design-6", title: "Design 6", year: "2024", category: "Kidswear",
    concept: "Playful Silhouettes",
    description: "A bright and energetic kidswear ensemble focusing on comfort, movement, and joyful colors.",
    image: d2 },
  { slug: "design-7", title: "Design 7", year: "2024", category: "Expression",
    concept: "Narrative Through Cloth",
    description: "An experimental piece investigating how movement and stillness interact with the wearer.",
    image: d3 },
];
