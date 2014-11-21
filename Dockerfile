FROM ruby:2.1.2-onbuild

# Update packages
RUN apt-get update

# Install git
RUN apt-get install -y git

# Install packages for Jekyll
RUN gem install jekyll
RUN apt-get install -y nodejs

# Setting up for codenamu.github.io
RUN cd /src
RUN git clone https://github.com/codenamu/codenamu.github.io
RUN bundle install

WORKDIR /src
