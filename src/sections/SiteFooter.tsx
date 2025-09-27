export default function SiteFooter() {
  return (
    <footer className="py-8 text-center text-sm text-white bg-gray-900 border-t border-gray-700">
      © {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}
