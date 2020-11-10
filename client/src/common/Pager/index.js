import React, { useEffect } from "react";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";
import { Paragraph, StyledPager, PagerButton } from "./styled";
import first from "../../images/first.svg";
import previous from "../../images/previous.svg";
import next from "../../images/next.svg";
import last from "../../images/last.svg";

const Pager = ({ numberOfResults }) => {
  const page = useQueryParameter("page") || 1;
  const replaceQueryParam = useReplaceQueryParameter();
  const numberOfPages = Math.ceil(numberOfResults / 10);

  useEffect(() => {
    if (page > numberOfPages) {
      replaceQueryParam({ key: "page" })
    }
  }, [replaceQueryParam, numberOfPages, page])
  return (
    <StyledPager>
      <PagerButton
        disabled={page < 2}
        src={first}
        onClick={() => replaceQueryParam({ key: "page" })}
      />
      <PagerButton
        disabled={page < 2}
        src={previous}
        onClick={() => replaceQueryParam({ key: "page", value: +page === 2 ? null : page - 1 })}
      />
      <Paragraph>
        Strona <strong>{page}</strong> z <strong>{numberOfPages}</strong>
      </Paragraph>
      <PagerButton
        disabled={page > numberOfPages - 1}
        src={next}
        onClick={() => replaceQueryParam({ key: "page", value: page > numberOfPages - 1 ? +numberOfPages : +page + 1 })}
      />
      <PagerButton
        disabled={page > numberOfPages - 1}
        src={last}
        onClick={() => replaceQueryParam({ key: "page", value: +numberOfPages })}
      />
    </StyledPager>
  )
}

export default Pager; 