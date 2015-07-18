if (Meteor.isClient) {  // This code is executed on the client only

} else {
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
}
