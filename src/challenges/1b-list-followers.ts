function listFollowers(followerNames: string[]): string {
  const [follower1, follower2, follower3] = followerNames
  return `Followed by ${follower1}, ${follower2} and others`;
}

export default listFollowers;
