class SignupMailer < ActionMailer::Base
  default from: "signup@wikitongues.org"

  def signup_email(email_hash)
    @name = email_hash[:name]
    @message = email_hash[:message]
    @email = email_hash[:email]
    mail(to: 'chrisvoxland@gmail.com', subject: 'Wikitongues.org Contact Form', from: @email)
  end
end
