import { Messages } from '../chat';

Meteor.publish('getMessages', function() {
    return Messages.find({}, {sort: {createdAt: 1}});
});

Meteor.methods({
    insertMessage(type, message) {
        console.log(type);
        console.log(message);
        if (!message || !type) {
            console.log('test');
            return;
        }
         console.log('test2');

        Messages.insert({
            type: type,
            message: message,
            createdAt: new Date()
        });
    }
});