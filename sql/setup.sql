-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS (_table_name_);

CREATE TABLE (_table_name_) (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  _col2name_ VARCHAR NOT NULL,
  _col3name_ VARCHAR NOT NULL,
  _col4name_ INT NOT NULL,
  _col5name_ VARCHAR NOT NULL,
  _col6name_ INT NOT NULL,
  _col7name_ BOOLEAN NOT NULL
);

INSERT INTO (_table_name_) (_column2name_, _3name_, _4name_, _5name_, _6name_, _7name_)
VALUES
(_row2col2val_, _row1col3val_, _row1col4val_, _row1col5val_, _row1col6val_, _row1col7val_),
(_row2col2val_, _row2col3val_, _row2col4val_, _row2col5val_, _row2col6val_, _row2col7val_),

// end