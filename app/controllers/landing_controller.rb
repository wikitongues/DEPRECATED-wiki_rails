class LandingController < ApplicationController
  def index
  end

  def create
    SignupMailer.signup_email(email_hash).deliver
    head :ok
  end

private

  def email_hash
    {
      email: params[:email],
      name: params[:name],
      message: params[:message]
    }
  end

end
