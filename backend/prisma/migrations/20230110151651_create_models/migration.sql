-- CreateTable
CREATE TABLE "Responsavel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "prontuario" TEXT NOT NULL,
    "chromebookId" TEXT NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chromebooks" (
    "id" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "model" TEXT NOT NULL DEFAULT 'Samsung Chromebook 4',

    CONSTRAINT "chromebooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlunoToResponsavel" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Responsavel_email_key" ON "Responsavel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "alunos_chromebookId_key" ON "alunos"("chromebookId");

-- CreateIndex
CREATE UNIQUE INDEX "chromebooks_serial_key" ON "chromebooks"("serial");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToResponsavel_AB_unique" ON "_AlunoToResponsavel"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToResponsavel_B_index" ON "_AlunoToResponsavel"("B");

-- AddForeignKey
ALTER TABLE "alunos" ADD CONSTRAINT "alunos_chromebookId_fkey" FOREIGN KEY ("chromebookId") REFERENCES "chromebooks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlunoToResponsavel" ADD CONSTRAINT "_AlunoToResponsavel_A_fkey" FOREIGN KEY ("A") REFERENCES "alunos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlunoToResponsavel" ADD CONSTRAINT "_AlunoToResponsavel_B_fkey" FOREIGN KEY ("B") REFERENCES "Responsavel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
