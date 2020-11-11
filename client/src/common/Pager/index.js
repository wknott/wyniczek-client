import React, { useEffect } from "react";
import { PageQueryParamName, useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";
import { Paragraph, StyledPager, PagerButton } from "./styled";
import first from "../../images/first.svg";
import previous from "../../images/previous.svg";
import next from "../../images/next.svg";
import last from "../../images/last.svg";

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
        src={first}
        onClick={() => replaceQueryParam({ key: PageQueryParamName })}
      />
      <PagerButton
        disabled={page < 2}
        src={previous}
        onClick={() => replaceQueryParam({ key: PageQueryParamName, value: +page === 2 ? null : page - 1 })}
      />
      <Paragraph>
        Strona <strong>{page}</strong> z <strong>{numberOfPages}</strong>
      </Paragraph>
      <PagerButton
        disabled={page > numberOfPages - 1}
        src={next}
        onClick={() => replaceQueryParam({ key: PageQueryParamName, value: page > numberOfPages - 1 ? +numberOfPages : +page + 1 })}
      />
      <PagerButton
        disabled={page > numberOfPages - 1}
        src={last}
        onClick={() => replaceQueryParam({ key: PageQueryParamName, value: +numberOfPages })}
      />
    </StyledPager>
  )
}

export default Pager; 