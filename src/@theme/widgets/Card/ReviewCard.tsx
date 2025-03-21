import { Avatar, Group, Link, Stack, Stars, Text } from '@theme/components';
import type { IDictionary, IFormatter } from '@theme/types';

type ReviewCardProps = {
  User: {
    Name: string;
    LastName: string;
    UserName: string;
    AvatarUrl?: string;
  };
  Review: {
    ReviewId: string;
    Rating: number;
    ExperienceText: string;
    CreatedAt: Date;
    IsVerified?: boolean;
  };
} & IDictionary & IFormatter;

const ReviewCard = ({ User, Review, dictionary, formater }: ReviewCardProps) => {
  const getName = () => {
    if (User.LastName) {
      return `${User.Name} ${User.LastName}`;
    }
    return User.Name;
  };
  const getRelativeTime = () => {
    const date = Review.CreatedAt || new Date();
    return formater.relativeTime(date);
  };
  return (
    <Stack boxShadow="card" padding="md" rounded="lg" width="full" className="review-card">
      <Group flexWrap="nowrap" justifyContent="start" preventGrowOverflow={false} overflow="hidden">
        <Avatar User={User} />
        <Stack gap="none" overflow="hidden">
          <Text truncate>
            <Text as="span" weight="semibold">{getName()}</Text>
            {' '}
            {dictionary('Helpers.User.action_review')}
          </Text>
          <Text color="secondary" size="sm">
            {getRelativeTime()}
          </Text>
        </Stack>
      </Group>
      <Stack>
        <Text>
          “
          {Review.ExperienceText}
          ”
        </Text>
        <Group preventGrowOverflow={false} justifyContent="between">
          <Link href="#" text={{ underline: true, weight: 'semibold', size: 'sm' }}>
            {dictionary('Helpers.User.action_read_more')}
          </Link>
          <Stars rate={5} />
        </Group>
      </Stack>
    </Stack>
  );
};

export { ReviewCard };
