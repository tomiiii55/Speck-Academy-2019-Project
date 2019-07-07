CREATE TABLE dvorane(
 hall_id serial NOT NULL,
  ime_dvorane VARCHAR(100) NOT NULL,
  adresa VARCHAR(100) NOT NULL,
  broj_mjesta INT,
  img BYTEA,
  date_created TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY( id )
);




CREATE TABLE rezervacija(
  id serial NOT NULL,
  status INT(100),
  rezervirano_od TIMESTAMP NOT NULL,
  rezervirano_do TIMESTAMP NOT NULL,
  rezervirao VARCHAR(100),
  hall_id serial REFERENCES dvorane(hall_id),
  date_created TIMESTAMP DEFAULT NOW(),
);

CREATE TABLE korisnici(
  id INT NOT NULL,
  ime_korisnika VARCHAR(100) NOT NULL,
  prezime_korisnika VARCHAR(100) NOT NULL,
  username VARCHAR (100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password_hash VARCHAR(100)
  oib INT,
  date_created TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY( id )
);

CREATE TABLE sessions(
user_id serial REFERENCES korisnici(user_id),
ipadres INT NOT NULL,
username VARCHAR(100) NOT NULL,
date_created TIMESTAMP DEFAULT NOW(),
);