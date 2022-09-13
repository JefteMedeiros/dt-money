import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { memo } from "react";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

// - Fluxo de renderização do react
// 1 - O HTML é recriado
// 2 - A versão do HTML antiga é comparada com a nova
// 3 - Se houverem mudanças, o HTML é reescrito 

// - Fluxo de renderização com memo
// 0 - Hooks changed, props changed (deep comparsion)
// 0.1 - Comparar a versão anterior dos hooks e props
// 0.2 - Caso algum tenha mudado, permitir a nova renderização.


const searchForm = () => {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => { return context.fetchTransactions });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(searchForm);
