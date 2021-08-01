import React, { useEffect } from "react";
import { PageQueryParamName, useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { Paragraph, StyledPager, PagerButton } from "./styled";
import { ReactComponent as FirstIcon } from "../../images/first.svg";
import { ReactComponent as PreviousIcon } from "../../images/previous.svg";
import { ReactComponent as NextIcon } from "../../images/next.svg";
import { ReactComponent as LastIcon } from "../../images/last.svg";

const Pager = ({ numberOfResults }) => {
  const page = useQueryParameter(PageQueryParamName) || 1;
  const replaceQueryParam = useReplaceQueryParameter();
  const numberOfPages = Math.ceil(numberOfResults / 10);

  useEffect(() => {
    if (page > numberOfPages) {
      replaceQueryParam({ key: PageQueryParamName })
    }
  }, [replaceQueryParam, numberOfPages, page])
  return (
    <StyledPager>
      <PagerButton
        disabled={page < 2}
        onClick={() => replaceQueryParam({ key: PageQueryParamName })}
      >
        <FirstIcon />
      </PagerButton>
      <PagerButton
        disabled={page < 2}
        onClick={() => replaceQueryParam({ key: PageQueryParamName, value: +page === 2 ? null : page - 1 })}
      >
        <PreviousIcon />
      </PagerButton>
      <Paragraph>
        Strona <strong>{page}</strong> z <strong>{numberOfPages}</strong>
      </Paragraph>
      <PagerButton
        disabled={page > numberOfPages - 1}
        onClick={() => replaceQueryParam({ key: PageQueryParamName, value: page > numberOfPages - 1 ? +numberOfPages : +page + 1 })}
      >
        <NextIcon />
      </PagerButton>
      <PagerButton
        disabled={page > numberOfPages - 1}
        onClick={() => replaceQueryParam({ key: PageQueryParamName, value: +numberOfPages })}
      >
        <LastIcon />
      </PagerButton>
    </StyledPager>
  )
}

export default Pager;