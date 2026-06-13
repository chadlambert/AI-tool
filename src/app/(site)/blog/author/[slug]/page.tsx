import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  return {
    title: "AI Tool - Next.js Template for AI Tools",
    description: "AI Tool - Next.js Template for AI Tools",
  };
}

const AuthorPage = async (props: Props) => {
  return null;
};

export default AuthorPage;