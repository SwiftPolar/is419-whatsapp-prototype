import { Messages } from '../chat';

Meteor.publish('getMessages', function() {
    return Messages.find({}, {sort: {createdAt: 1}});
});

Meteor.methods({
    insertMessage(type, message) {
        Messages.insert({
            type: type,
            message: message,
            createdAt: new Date()
        });
    }
});