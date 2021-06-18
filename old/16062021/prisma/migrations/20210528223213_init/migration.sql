-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "password" TEXT
);

-- CreateTable
CREATE TABLE "Car" (
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
    "Month" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Secret" TEXT NOT NULL
);
