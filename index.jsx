// Define a collection to hold our notifications
Notifications = new Mongo.Collection("notifications");

if (Meteor.isClient) {  // This code is executed on the client only

} else { //serverside
  Meteor.publish('users', function () {
      return Meteor.users.find({});
  });
  ServiceConfiguration.configurations.remove({
      service: 'twitter'
  });
  ServiceConfiguration.configurations.insert({
      service    : 'twitter',
      consumerKey: 'SBdsNROyRbpQP2Bw6beUzw',
      secret     : 'V0CnmFNQSVE1AeFaWUAuVOjclGmkiGyJII3PIYtDDo'
  });
  Meteor.publish('notifications', function () {
    return Notifications.find({});
  });
}
