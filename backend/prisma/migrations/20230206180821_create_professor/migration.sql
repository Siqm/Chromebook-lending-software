-- CreateTable
CREATE TABLE "professores" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "chromebookId" TEXT NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professores_email_key" ON "professores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "professores_chromebookId_key" ON "professores"("chromebookId");

-- AddForeignKey
ALTER TABLE "professores" ADD CONSTRAINT "professores_chromebookId_fkey" FOREIGN KEY ("chromebookId") REFERENCES "chromebooks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
