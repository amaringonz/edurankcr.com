import { Image } from '@theme/components';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

const avatarVariants = cva('');

type AvatarProps = {
  User: {
    UserName: string;
    AvatarUrl?: string;
  };
} & ComponentProps<typeof Image> & VariantProps<typeof avatarVariants>;

const Avatar: FC<AvatarProps> = memo(({
  className,
  User,
  ...props
}) => {
  const getAvatarUrl = () => {
    if (User.AvatarUrl) {
      return User.AvatarUrl;
    }
    return `https://api.dicebear.com/9.x/thumbs/svg?seed=${User.UserName}&radius=50&backgroundColor=abdae3`;
  };

  return (
    <Image
      className={cx(avatarVariants(), className)}
      src={getAvatarUrl()}
      alt={User.UserName}
      width={48}
      height={48}
      {...props}
    />
  );
});

Avatar.displayName = 'Avatar';

export { Avatar };
