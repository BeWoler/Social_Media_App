'use client';

import React, { FormEvent } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Spinner } from '@/components/shared';
import { Button, Input } from '@/components/ui';
import { useAuthedUser, useNewArticle } from '@/hooks';

const CreatePostPage = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [markdown, setMarkdown] = React.useState<string>('');
  const titleRef = React.useRef<HTMLInputElement>(null);

  const user = useAuthedUser((state) => state.user);

  const { mutate, error, status } = useNewArticle();

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      description: markdown,
      title: titleRef.current?.value as string,
      user: user.id,
    });

    if (status === 'success' || status === 'error') {
      if (titleRef.current?.value !== undefined && markdown) {
        titleRef.current.value = '';
      }
      setMarkdown('');
    }
  };

  return (
    <form
      onSubmit={status === 'pending' ? undefined : handleSubmit}
      className="flex flex-col w-full bg-dark-4 p-4 min-w-[375px] rounded-xl"
    >
      <div className="mb-3 flex flex-col">
        <Input
          ref={titleRef}
          required
          name="title"
          type="text"
          placeholder="Title"
          inputSubClass="text-black p-2 rounded-xl w-full max-w-md"
          label="Title"
          labelSubClass="text-white text-lg"
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
      {error && (
        <div className="text-lg text-red">{error.response.data.message}</div>
      )}
      {status === 'success' && (
        <div className="text-lg text-green-400">Success!</div>
      )}
      <div className="w-full flex justify-end">
        <Button
          variant="gradient"
          subClass="text-lg w-[10%]"
          title={status === 'pending' ? <Spinner /> : 'Create'}
          disabled={status === 'pending'}
          click={() => handleSubmit}
        />
      </div>
    </form>
  );
};

export default CreatePostPage;
