-- Migration number: 0001 	 2025-04-22T19:04:16.592Z
CREATE TABLE IF NOT EXISTS consumption (
	cid 				INTEGER PRIMARY KEY,
	category 		VARCHAR(50) NOT NULL,
	title 			VARCHAR(200) NOT NULL,
	attribution VARCHAR(100),
	year				INTEGER,
	current 		BOOLEAN NOT NULL
);