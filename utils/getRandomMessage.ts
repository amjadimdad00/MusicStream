type Messages = {
  LoveMessages: string[];
};

export const getRandomMessage = (messages: Messages): string => {
  const LoveMessages = messages.LoveMessages;
  const randomIndex = Math.floor(Math.random() * LoveMessages.length);
  return LoveMessages[randomIndex];
};
