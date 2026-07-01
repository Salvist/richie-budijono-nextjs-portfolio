import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import GithubLogo from "./github_logo";
import NextImage from "./next_image";

function Code({ children, ...props }: any) {
  const code = String(children).replace(/\r\n?/g, "\n");
  const codeHTML = highlight(code);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  GithubLogo,
  NextImage
};

export default function MDXContent(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
