DROP TABLE IF EXISTS doggys;

CREATE TABLE doggys (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  type VARCHAR NOT NULL,
  size VARCHAR NOT NULL,
  snack VARCHAR NOT NULL,
  song VARCHAR NOT NULL,
  singer BOOLEAN NOT NULL
);

INSERT INTO doggys (name, age, type, size, snack, song, singer)
VALUES
('Vincent', 11, 'Afghan Hound', 'large', 'cheez-its', 'ACDC Ride On', false),
('Walden', 4, 'American Pit Bull Terrier', 'medium', 'profiteroles', 'Television Marquee Moon', true),
('Hannah', 6, 'Shiba Inu', 'medium', 'potato chips', 'Gloria Estefan Hoy', true),
('Judith', 9, 'Maltipoo', 'small', 'anchovies', 'Billie Holiday All Of Me', true),
('Janet', 3, 'Havanese', 'small', 'snickers', 'Talking Heads This Must Be the Place', false);

DROP TABLE IF EXISTS cows;

CREATE TABLE cows (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  type VARCHAR NOT NULL,
  alias VARCHAR NOT NULL,
  color VARCHAR NOT NULL,
  movie VARCHAR NOT NULL,
  chill BOOLEAN NOT NULL
);

INSERT INTO cows (name, age, type, alias, color, movie, chill)
VALUES
('Herb', 17, 'Beefalo', 'the Nose', 'burgundy', 'The Talking Heads (Live): Stop Making Sense', true),
('Lottie', 6, 'Hungarian Grey', '0900', 'grey', 'Jimminy Cricket Christmas', true),
('Basil', 10, 'Florida Cracker Cattle', 'potato chip', 'fuchsia', 'The Air Up There', false),
('Gregory', 14, 'Nguni Cattle', 'peg leg greg', 'pea green', 'Swiss Family Robinson (based on the book by Robert Louis Stevenson)', true),
('Georgina', 3, 'Pustertaler Sprinzen', 'the Sweede', 'periwinkle', 'The Man with the Golden Gun', false)
