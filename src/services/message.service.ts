import { Subject } from 'rxjs';

const subject = new Subject();

export const messageService = {
  sendMessage: (message: any) => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  getMessage: () => subject.asObservable()
};