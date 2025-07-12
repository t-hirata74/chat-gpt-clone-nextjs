import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { CodeBlock } from "./code-block";

const components: Partial<Components> = {
  // pre要素をカスタマイズして、CodeBlockコンポーネントを使用
  pre: ({ node, children, ...props }: any) => {
    return <CodeBlock {...props}>{children}</CodeBlock>;
  },
  // インラインコード用
  code: ({ node, inline, className, children, ...props }: any) => {
    // インラインコードの場合はシンプルなcode要素として処理
    if (inline) {
      return (
        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      );
    }
    // コードブロックの場合はそのまま返す（preで処理される）
    return <code {...props}>{children}</code>;
  },
};

export const Markdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown components={components}>{children}</ReactMarkdown>
  );
};