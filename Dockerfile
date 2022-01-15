FROM ruby:2.6.3
WORKDIR /pfi
COPY Gemfile /pfi/Gemfile

RUN gem install bundler
RUN gem update
RUN bundle install

# RUN ["chmod", "+x", "./entrypoint.sh" ]
# RUN chmod 777 ./entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "s", "-p", "3000"]