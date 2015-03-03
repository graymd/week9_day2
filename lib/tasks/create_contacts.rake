task create_contacts: :environment do
  10.times do
    Contact.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email,
      phone_number: Faker::Number.number(10),
      })
  end
end
