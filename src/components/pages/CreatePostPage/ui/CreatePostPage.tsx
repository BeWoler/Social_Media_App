'use client';

import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const CreatePostPage = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [markdown, setMarkdown] = React.useState<string>('');

  const showPreview = (markdown: string) => {
    return (
      <Markdown
        remarkPlugins={[remarkGfm]}
        className="text-black p-2 text-lg w-full max-w-6xl bg-white h-auto break-all rounded-xl"
      >
        {markdown}
      </Markdown>
    );
  };

  return (
    <div className="flex flex-col w-full bg-dark-4 p-4 min-w-[375px] rounded-xl">
      {/* <div>
        <h2>Title</h2>
        <input type="text" required />
      </div> */}
      <div className="flex gap-10 text-lg text-white mb-3">
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
    </div>
  );
};

export default CreatePostPage;
