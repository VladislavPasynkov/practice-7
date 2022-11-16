const validEmail = ['valid@email.com', 'valid1@email.com', 'valid2@email.com', 'valid3@email.com', 'valid4@email.com'];
const blackList = ['invalidvalid@email.com', 'invalidvalid1@email.com', 'invalidvalid2@email.com', 'invalidvalid3@email.com', 'invalidvalid4@email.com'];
const emailsInBlackList = [];
const emails = [];

function getValidEmail() {

  for (let email of validEmail) {
    if (email) {
      console.log('Валидный емаил! ' + validEmail);
      emails.push;
    }
  }

  for (let email of blackList) {
    if (email) {
      console.log('Не валидный емаил! ' + blackList);
      emailsInBlackList.push;
    }
  }

}

getValidEmail(emails);