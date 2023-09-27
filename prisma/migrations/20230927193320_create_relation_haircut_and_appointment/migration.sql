/*
  Warnings:

  - You are about to drop the column `id_appointment` on the `haircut` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `haircut` DROP FOREIGN KEY `haircut_id_appointment_fkey`;

-- AlterTable
ALTER TABLE `haircut` DROP COLUMN `id_appointment`;

-- CreateTable
CREATE TABLE `haircut_appointment` (
    `id_appointment` VARCHAR(191) NOT NULL,
    `id_haircut` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `haircut_appointment_id_appointment_id_haircut_key`(`id_appointment`, `id_haircut`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `haircut_appointment` ADD CONSTRAINT `haircut_appointment_id_appointment_fkey` FOREIGN KEY (`id_appointment`) REFERENCES `appointment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `haircut_appointment` ADD CONSTRAINT `haircut_appointment_id_haircut_fkey` FOREIGN KEY (`id_haircut`) REFERENCES `haircut`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
