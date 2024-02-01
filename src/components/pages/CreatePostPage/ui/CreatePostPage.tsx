'use client';

import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Button } from '@/components/ui';
import { useNewArticle } from '@/hooks/query/useNewArticle';

const CreatePostPage = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [markdown, setMarkdown] = React.useState<string>('');
  const titleRef = React.useRef<HTMLInputElement>(null);

  const { mutate } = useNewArticle({
    author: 'BeWoler',
    description: markdown,
    title: titleRef.current?.value as string,
  });

  const showPreview = (markdown: string) => {
    return (
      <Markdown
        remarkPlugins={[remarkGfm]}
        className="text-black p-2 mb-3 w-full max-w-6xl bg-white h-auto break-words rounded-xl"
      >
        {markdown}
      </Markdown>
    );
  };

  return (
    <div className="flex flex-col w-full bg-dark-4 p-4 min-w-[375px] rounded-xl">
      <div className="mb-3">
        <h2 className="text-white text-lg">Title</h2>
        <input
          name="title"
          ref={titleRef}
          type="text"
          required
          className="text-black p-2 rounded-xl w-full max-w-md"
          placeholder="Title"
        />
      </div>
      <div className="flex gap-10 text-lg text-white mb-2">
        <h2
          onClick={() => setIsShow(false)}
          className={`cursor-pointer transition-all duration-300 border-b-4 rounded ${
            !isShow ? 'border-primary-500' : 'border-transparent'
          }`}
        >
          Description
        </h2>
        <h2
          onClick={markdown ? () => setIsShow(true) : () => null}
          className={`cursor-pointer transition-all duration-300 border-b-4 rounded ${
            isShow ? 'border-primary-500' : 'border-transparent'
          } ${!markdown ? 'text-gray-600' : ''}`}
        >
          Preview
        </h2>
      </div>
      {isShow ? (
        showPreview(markdown)
      ) : (
        <div>
          <textarea
            className="w-full p-2 max-w-full h-56 resize text-black rounded-xl text-lg"
            placeholder="Write your Markdown here..."
            name="markdown"
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
            required
          />
        </div>
      )}
      <Button
        variant="gradient"
        title="Create"
        subClass="self-end"
        click={mutate}
      />
    </div>
  );
};

export default CreatePostPage;
