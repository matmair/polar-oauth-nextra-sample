const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Sample by <a href="https://mjmair.com">@matmair</a>.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a.float {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
