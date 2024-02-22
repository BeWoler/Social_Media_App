import React from 'react';

import { CreatePostPage } from '@/components/pages';
import { AuthChecker } from '@/components/features';

const CreatePost = () => {
  return (
    <AuthChecker customElement="Not Authed">
      <CreatePostPage />
    </AuthChecker>
  );
};

export default CreatePost;
