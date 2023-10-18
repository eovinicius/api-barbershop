-- CreateTable
CREATE TABLE `customers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `customers_id_key`(`id`),
    UNIQUE INDEX `customers_email_key`(`email`),
    UNIQUE INDEX `customers_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barbers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `barbers_id_key`(`id`),
    UNIQUE INDEX `barbers_photo_key`(`photo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appointments` (
    `id` VARCHAR(191) NOT NULL,
    `id_customer` VARCHAR(191) NOT NULL,
    `id_barber` VARCHAR(191) NOT NULL,
    `haircut_date` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `appointments_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `haircuts` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    UNIQUE INDEX `haircuts_id_key`(`id`),
    UNIQUE INDEX `haircuts_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `haircuts_appointments` (
    `id_appointment` VARCHAR(191) NOT NULL,
    `id_haircut` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `haircuts_appointments_id_appointment_id_haircut_key`(`id_appointment`, `id_haircut`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `appointments` ADD CONSTRAINT `appointments_id_barber_fkey` FOREIGN KEY (`id_barber`) REFERENCES `barbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appointments` ADD CONSTRAINT `appointments_id_customer_fkey` FOREIGN KEY (`id_customer`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `haircuts_appointments` ADD CONSTRAINT `haircuts_appointments_id_appointment_fkey` FOREIGN KEY (`id_appointment`) REFERENCES `appointments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `haircuts_appointments` ADD CONSTRAINT `haircuts_appointments_id_haircut_fkey` FOREIGN KEY (`id_haircut`) REFERENCES `haircuts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
