import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>


        <form action="">
          <input type="text" placeholder="Descrição" required/>
          <input type="number" placeholder="Preço" required/>
          <input type="text" placeholder="Descrição" required/>
          
          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
              Entrada
              <ArrowCircleUp size={24} />
            </TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant="outcome">
              Saída
              <ArrowCircleDown size={24} />
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
