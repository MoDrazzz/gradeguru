const message1: Message = {
  id: 1,
  title: "Welcome to the new school year!",
  content:
    "We are excited to welcome you to the new school year! We hope you will enjoy the new features of our app.",
  dateSent: 1680897152227,
  isRead: false,
  isFavourite: true,
  senderId: 2,
  receiverId: 12345,
};
const message2: Message = {
  id: 2,
  title: "Re: Tommorow's test question",
  content:
    "Re: The test will cover the following topics: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6",
  dateSent: 1680897152227,
  isRead: true,
  isFavourite: false,
  senderId: 12345,
  receiverId: 1,
};
const message3: Message = {
  id: 3,
  title: "Tommorow's test question",
  content: "What topics will be covered on tommorow's test?",
  dateSent: 1680897152227,
  isRead: true,
  isFavourite: false,
  senderId: 1,
  receiverId: 12345,
};

export const receivedMessages: Message[] = [message1, message3];
export const sentMessages: Message[] = [message2];
