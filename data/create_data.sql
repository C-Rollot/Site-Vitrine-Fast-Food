BEGIN;


-- On s'assure que la table soit supprimée avant d'être créée pour éviter tout problème
DROP TABLE IF EXISTS "plat";



-- ---------------------------------------
-- Table "plat"
-- ---------------------------------------
CREATE TABLE IF NOT EXISTS "plat" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "price" integer NOT NULL,
    "description" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

-- ---------------------------------------
-- Table "contact"
-- ---------------------------------------
CREATE TABLE IF NOT EXISTS "contact" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "contact" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);


-- -----------------------------------------------
-- Insertion des données dans la table "plat"
-- -----------------------------------------------
INSERT INTO "plat" ("name", "price", "description") VALUES
('Kebab', 7, 'lorem ipsum del kebab'),
('Tacos', 8, 'lorem ipsum del tacos');

-- -----------------------------------------------
-- Insertion des données dans la table "plat"
-- -----------------------------------------------
INSERT INTO "contact" ("contact") VALUES
('03-85-46-47-70'),
('https://www.facebook.com/stlegerkebab/'),
('12 Place du Capitaine Giraud, 71510 Saint-Léger-sur-Dheune');

SELECT setval('plat_id_seq', (SELECT MAX(id) from "plat"));



COMMIT;
