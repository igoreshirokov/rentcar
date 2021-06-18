/*
  Warnings:

  - Added the required column `Images` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "model" TEXT,
    "Year" INTEGER NOT NULL,
    "Engine" TEXT NOT NULL,
    "Fuel" TEXT NOT NULL,
    "Transmission" TEXT NOT NULL,
    "Doors" INTEGER NOT NULL,
    "Consumption" INTEGER NOT NULL,
    "Day" INTEGER NOT NULL,
    "Sixday" INTEGER NOT NULL,
    "Week" INTEGER NOT NULL,
    "Month" INTEGER NOT NULL,
    "Images" TEXT NOT NULL
);
INSERT INTO "new_Car" ("Consumption", "Day", "Doors", "Engine", "Fuel", "Month", "Sixday", "Transmission", "Week", "Year", "id", "model") SELECT "Consumption", "Day", "Doors", "Engine", "Fuel", "Month", "Sixday", "Transmission", "Week", "Year", "id", "model" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
