DROP TABLE IF EXISTS (doggys);

CREATE TABLE (doggys) (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  age VARCHAR NOT NULL,
  type INT NOT NULL,
  size VARCHAR NOT NULL,
  snack INT NOT NULL,
  song VARCHAR NOT NULL,
  singer BOOLEAN NOT NULL
);

INSERT INTO (doggys) (name, age, type, size, snack, song, singer)
VALUES
('Vincent', 11, 'Afghan Hound', 'large', 'cheez-its', 'ACDC Ride On', false),
('Walden', 4, 'American Pit Bull Terrier', 'medium', 'profiteroles', 'Television Marquee Moon', true),
('Hannah', 6, 'Shiba Inu', 'medium', 'potato chips', 'Gloria Estefan Hoy', true),
('Judith', 9, 'Maltipoo', 'small', 'anchovies', 'Billie Holiday All Of Me', true),
('Janet', 3, 'Havanese', 'small', 'snickers', 'Talking Heads This Must Be the Place', false)
